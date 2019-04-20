import {SHOW_CAROUSEL} from '../constants/index';

export function carouselVisible(payload) {
    return {
        type: SHOW_CAROUSEL,
        payload
    }
}
