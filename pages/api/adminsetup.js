import { dbCon } from "../../models"

const handler = async (req, res) => {
    const { method } = req;
    if (method == "GET") {
        const { Admins } = await dbCon();
        const admin = await Admins.create({
            role: "owner",
            enabled: true,
            email: "agu.chux@yahoo.com",
            password: "admin",
            firstname: "Nohe",
            lastname: "Admin",
            logonCount: 0
        }).catch((err) => console.log(err));
        if (admin) {
            res.status(200).json({ status: true, admin: admin })
        } else {
            res.status(400).json({ error: 'Admin not created' })
        }
    } else if (method == "POST") {
        res.status(400).json({ error: 'Unsupported method' })
    } else {
        res.status(400).json({ error: 'Unsupported method' })
    }

}
export default handler;