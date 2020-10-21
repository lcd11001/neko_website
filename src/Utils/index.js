import * as Assets from './Assets'
import * as String from './String'
import * as Time from './Time'
import * as Cryption from './Cryption'
import * as Storage from './Storage'
import * as Popup from './Popup'

import ID from '../Translations/ID.json'

const Utils = {
    getUrl: Assets.getUrl,
    getIconUrl: Assets.getIconUrl,
    getImageUrl: Assets.getImageUrl,
    getLogoUrl: Assets.getLogoUrl,
    getBufferAsync: Assets.getBufferAsync,

    parseString: String.parseString,
    hasNumber: String.hasNumber,
    hasUpperCase: String.hasUpperCase,
    hasLowerCase: String.hasLowerCase,
    hasSpecial: String.hasSpecial,
    isEmail: String.isEmail,
    isVersion: String.isVersion,

    getCurrentTime: Time.getCurrentTime,
    sec2time: Time.sec2time,
    sec2FullTime: Time.sec2FullTime,
    zeroPadding: Time.zeroPadding,

    EncryptData: Cryption.EncryptData,
    DecryptData: Cryption.DecryptData,
    Hash: Cryption.Hash,
    String2Hex: Cryption.String2Hex,
    Hex2String: Cryption.Hex2String,

    getItem: Storage.getItem,
    setItem: Storage.setItem,
    clearAllItems: Storage.clearAllItems,
    REMEMBER_ME: Storage.REMEMBER_ME,
    LOGIN_TOKEN: Storage.LOGIN_TOKEN,
    EMAIL: Storage.EMAIL,

    SmartClosePopup: Popup.SmartClosePopup,

    dispatchEvent: (eventName, data) => {
        var evt;
        try {
            evt = new CustomEvent(eventName, { detail: data });
        } catch (e) {
            evt = document.createEvent('Event');
            evt.initEvent(eventName, true, true);
            evt.detail = data
        }
        document.dispatchEvent(evt);
    },

    i18Link: (t, id) => {
        const linkID = t(id)
        const link = t(ID.LINK[linkID.replace(/LINK::/g, '')])

        return link
    },

    i18Image: (t, id) => {
        const imageID = t(id)
        const image = t(ID.IMAGE[imageID.replace(/IMAGE::/g, '')])

        return image
    }
}

export default Utils