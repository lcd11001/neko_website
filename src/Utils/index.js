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

    dispatchEvent: (eventName, data) =>
    {
        var evt;
        try
        {
            evt = new CustomEvent(eventName, { detail: data });
        } catch (e)
        {
            evt = document.createEvent('Event');
            evt.initEvent(eventName, true, true);
            evt.detail = data
        }
        document.dispatchEvent(evt);
    },

    i18Link: (t, id) =>
    {
        const linkID = t(id)
        const link = t(ID.LINK[linkID.replace(/LINK::/g, '')])

        return link
    },

    i18Image: (t, id) =>
    {
        const imageID = t(id)
        const image = t(ID.IMAGE[imageID.replace(/IMAGE::/g, '')])

        return image
    },

    isWaterWaveSupported: () =>
    {
        var canvas = document.createElement('canvas');
        var gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');

        if (!gl)
        {
            // Browser does not support WebGL.
            return null;
        } // Load extensions


        var extensions = {};
        ['OES_texture_float', 'OES_texture_half_float', 'OES_texture_float_linear', 'OES_texture_half_float_linear'].forEach(function (name)
        {
            var extension = gl.getExtension(name);

            if (extension)
            {
                extensions[name] = extension;
            }
        }); // If no floating point extensions are supported we can bail out early.

        if (!extensions.OES_texture_float)
        {
            return null;
        }

        var configs = [];

        function createConfig(type, glType, arrayType)
        {
            var name = 'OES_texture_' + type,
                nameLinear = name + '_linear',
                linearSupport = (nameLinear in extensions),
                configExtensions = [name];

            if (linearSupport)
            {
                configExtensions.push(nameLinear);
            }

            return {
                type: glType,
                arrayType: arrayType,
                linearSupport: linearSupport,
                extensions: configExtensions
            };
        }

        configs.push(createConfig('float', gl.FLOAT, Float32Array));

        if (extensions.OES_texture_half_float)
        {
            configs.push( // Array type should be Uint16Array, but at least on iOS that breaks. In that case we
                // just initialize the textures with data=null, instead of data=new Uint16Array(...).
                // This makes initialization a tad slower, but it's still negligible.
                createConfig('half_float', extensions.OES_texture_half_float.HALF_FLOAT_OES, null));
        } // Setup the texture and framebuffer


        var texture = gl.createTexture();
        var framebuffer = gl.createFramebuffer();
        gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE); // Check for each supported texture type if rendering to it is supported

        var config = null;

        for (var i = 0; i < configs.length; i++)
        {
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 32, 32, 0, gl.RGBA, configs[i].type, null);
            gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);

            if (gl.checkFramebufferStatus(gl.FRAMEBUFFER) === gl.FRAMEBUFFER_COMPLETE)
            {
                config = configs[i];
                break;
            }
        }

        return config !== null;
    }
}

export default Utils