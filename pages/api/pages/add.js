import { dbCon } from "../../../models";
import { toShortname } from "../../../libs/stringify";

const handler = async (req, res) => {
    const { method } = req;
    const { title, content } = req.body;
    if (method == "POST") {
        const { Pages } = await dbCon();
        const page = await Pages.create({
            shortname: toShortname(title),
            title: title,
            content: content,
        }).catch((err) => {
            res.status(400).json({ error: err })
        });
        console.log(page);
    } else if (method == "GET") {
        res.status(400).json({ error: 'Unsupported method' })
    } else {
        res.status(400).json({ error: 'Unsupported method' })
    }

}
export default handler;