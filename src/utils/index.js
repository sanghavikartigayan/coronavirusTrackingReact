import { notify } from "react-notify-toast";
import { NOTIFICATION_TIME_MEDIUM, NOTIFICATION_TIME_LONG } from "../constants";

const WHITELISTED_DOMAINS = ['@performance.ca'];

export function isEmailWhitelisted(email) {
    return WHITELISTED_DOMAINS.filter(domain => email.includes(domain)).length !== 0;
}

export function handleError(err) {
    if (err.response) {
        notify.show(err.response.data.message, "error", NOTIFICATION_TIME_LONG);
    } else {
        notify.show("There was an error while performing the action", "error", NOTIFICATION_TIME_MEDIUM);
    }
}

export function numberWithCommas(n) {
    var parts = n.toString().split(".");
    return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",") + (parts[1] ? "." + parts[1] : "");
}