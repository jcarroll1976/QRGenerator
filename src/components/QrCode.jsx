import { useState } from"react";
import {QRCodeCanvas} from "qrcode.react";




function QrCode() {
    const [url,setUrl] = useState("");

    const downloadQRCode = (e) => {
        e.preventDefault();
        setUrl("");
    };

    const qrCodeEncoder = (e) => {
        setUrl(e.target.value);
    };

    const qrcode = (
        <QRCodeCanvas
            id = "qrCode"
            value = {url}
            size = {300}
            bgColor = {"#00ff00"}
            level = {"H"}
            />
    );

    return (
        <div className="qrcode_container">
            <div>{qrcode}</div>
            <div className="input_group">
            <form onSubmit={downloadQRCode}>
                <label>Enter URL</label>
                <input type="text" value={url} placeholder= "Https://hackernoon.com"
                onChange = {qrCodeEncoder} />
                <button type ="submit" diasbled={!url}>Download QR Code</button>

            </form>
            </div>
        </div>
    );
};

export default QrCode
