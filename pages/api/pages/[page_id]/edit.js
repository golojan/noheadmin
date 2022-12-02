import { dbCon } from "../../../../models";

const handler = async (req, res) => {
    const { method } = req;
    const { page_id } = req.query;
    if (method == "GET") {
        const { Pages } = await dbCon();
        const deleted = await Pages.deleteOne({
            _id: page_id,
        }).catch((err) => {
            res.status(400).json({ error: err })
        });
        if (deleted) {
            res.status(200).json({ status: true, data: deleted })
        } else {
            res.status(400).json({ status: false })
        }
    } else if (method == "POST") {
        res.status(400).json({ error: 'Unsupported method' })
    } else {
        res.status(400).json({ error: 'Unsupported method' })
    }

}
export default handler;