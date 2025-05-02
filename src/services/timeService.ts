import moment from "moment";
import 'moment/locale/it'
moment().locale('it');
const now = moment();
const timeService = {
    getDayString() {
        return now.format('D MMMM YYYY');
    },

    getDayStringShort() {
        return now.format('DD/MM/YYYY');
    },

    getHourString() {
        return now.format('HH:mm');
    },

    getDateTimeString() {
        return this.getDayString().toUpperCase() + ' - AGGIORNATO ALLE ' + this.getHourString();
    }
}

export default timeService;