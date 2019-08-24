import axios from "axios";
import qs from "qs";

export default class LineAccessToken {
    private accessToken: string | null = null;

    public get() {
        return this.accessToken;
    }

    public async renew() {
        const credentials = {
            client_id: process.env.CHANNEL_ID,
            client_secret: process.env.CHANNEL_SECRET,
            grant_type: "client_credentials",
        };

        const uri = "https://api.line.me/v2/oauth/accessToken";
        const data = qs.stringify(credentials);
        const res = await axios
            .post(uri, {
                data
            })
            .then(res => {
                this.accessToken = res.data.accessToken;
            })
            .catch(err => {
                console.log(err);
            })
            .finally(() => {
                console.log("finaly")
            });
        return this.accessToken;
    }
}
