package org.mybatis.jpetstore.controller;

import org.mybatis.jpetstore.domain.Account;
import org.mybatis.jpetstore.domain.Cart;
import org.mybatis.jpetstore.domain.Order;
import org.mybatis.jpetstore.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.List;

@Controller
@RequestMapping("/")
public class OrderController {
    private static final String REDIRECT_BASE_URL="http://localhost:8080";

    @Autowired
    OrderService orderService;

    @GetMapping("/listOrders")
    public String listOrders(HttpSession session, HttpServletRequest request) {
        Account account = (Account) session.getAttribute("account");
        List<Order> orderList = orderService.getOrdersByUsername(account.getUsername());
        request.setAttribute("orderList", orderList);
        return "order/ListOrders";
    }

    @GetMapping("/newOrderForm")
    public String newOrderForm(HttpServletRequest req, HttpSession session, RedirectAttributes redirect) {
        Account account = (Account) session.getAttribute("account");
        // Cart cart = (Cart) session.getAttribute("cart");
        Cart cart = new Cart();
        if (account == null) {
            String msg = "You must sign on before attempting to check out.  Please sign on and try checking out again.";
            redirect.addAttribute("msg", msg);
            return "redirect:" + REDIRECT_BASE_URL + "/account/signonForm";
        }
        else if (cart != null) {
            Order order = new Order();
            order.initOrder(account, cart);
            session.setAttribute("order", order);
            return "order/NewOrderForm";
        }
        else {
            String msg = "An order could not be created because a cart could not be found.";
            req.setAttribute("msg", msg);
            return "common/Error";
        }
    }

    @PostMapping("/newOrder")
    public String newOrder(Order order, @RequestParam(required = false) boolean shippingAddressRequired, @RequestParam(required = false) boolean confirmed, HttpServletRequest req, HttpSession session) {
        Order sessionOrder = (Order) session.getAttribute("order");
        if (shippingAddressRequired) {
            changeBillInfo(sessionOrder, order);
            session.setAttribute("order", sessionOrder);
            return "order/ShippingForm";
        } else if(!confirmed) {
            changeShipInfo(sessionOrder, order);
            session.setAttribute("order", sessionOrder);
            return "order/ConfirmOrder";
        } else if (order != null) {
            orderService.insertOrder(order);
            
            session.removeAttribute("cart");

            String msg = "Thank you, your order has been submitted.";
            req.setAttribute("msg", msg);
            return "order/ViewOrder";
        } else {
            String msg = "An error occurred processing your order (order was null).";
            req.setAttribute("msg", msg);
            return "common/Error";
        }
    }

    @GetMapping("/viewOrder")
    public String viewOrder(@RequestParam int orderId, HttpServletRequest req, HttpSession session) {
        Account account = (Account) session.getAttribute("account");

        Order order = orderService.getOrder(orderId);
        if (account.getUsername().equals(order.getUsername())) {
            req.setAttribute("order", order);
            return "order/ViewOrder";
        } else {
            String msg = "You may only view your own orders.";
            req.setAttribute("msg", msg);
            return "common/Error";
        }
    }

    public void changeBillInfo(Order sessionOrder, Order order) {
        sessionOrder.setCardType(order.getCardType());
        sessionOrder.setCreditCard(order.getCreditCard());
        sessionOrder.setExpiryDate(order.getExpiryDate());
        sessionOrder.setBillToFirstName(order.getBillToFirstName());
        sessionOrder.setBillToLastName(order.getBillToLastName());
        sessionOrder.setBillAddress1(order.getBillAddress1());
        sessionOrder.setBillAddress2(order.getBillAddress2());
        sessionOrder.setBillCity(order.getBillCity());
        sessionOrder.setBillState(order.getBillState());
        sessionOrder.setBillZip(order.getBillZip());
        sessionOrder.setBillCountry(order.getBillCountry());
    }

    public void changeShipInfo(Order sessionOrder, Order order) {
        sessionOrder.setShipToFirstName(order.getShipToFirstName());
        sessionOrder.setShipToLastName(order.getShipToLastName());
        sessionOrder.setShipAddress1(order.getShipAddress1());
        sessionOrder.setShipAddress2(order.getShipAddress2());
        sessionOrder.setShipCity(order.getShipCity());
        sessionOrder.setShipState(order.getShipState());
        sessionOrder.setShipZip(order.getShipZip());
        sessionOrder.setShipCountry(order.getShipCountry());
    }
}
