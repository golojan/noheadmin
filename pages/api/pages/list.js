import { dbCon } from "../../../models";

const handler = async (req, res) => {
    const { method } = req;
    if (method == "GET") {
        const { Pages } = await dbCon();
        const pages = await Pages.find({}).catch((err) => {
            res.status(400).json({ error: err })
        });
        if (pages) {
            res.status(200).json({ status: true, list: pages })
        } else {
            res.status(400).json({ status: false, error: 'Page read error' })
        }
    } else if (method == "POST") {
        res.status(400).json({ error: 'Unsupported method' })
    } else {
        res.status(400).json({ error: 'Unsupported method' })
    }

}
export default handler;