import { notify } from "react-notify-toast";
import { NOTIFICATION_TIME_MEDIUM, NOTIFICATION_TIME_LONG } from "../constants";

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

export function sortByMostRecentDate(array) {
    return array.sort(function (a, b) {
        var dateA = new Date(a.SummaryDate), dateB = new Date(b.SummaryDate);
        return dateB - dateA;
    });
}