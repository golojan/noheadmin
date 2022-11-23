import { dbCon } from "../../models"

const handler = async (req, res) => {
    const { method } = req;
    if (method == "GET") {
        res.status(400).json({ error: 'Unsupported method' })
    } else if (method == "POST") {
        const { email, password } = req.body;
        const { Admins } = await dbCon();
        const admin = await Admins.findOne({ email: email, password: password }).catch((err) => res.status(400).json({ status: false, err: err }));
        if (admin) {
            res.status(200).json({ status: true, accid: admin._id, role: admin.role })
        } else {
            res.status(200).json({ status: false })
        }
    } else {
        res.status(400).json({ error: 'Unsupported method' })
    }

}
export default handler;