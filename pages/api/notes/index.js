/* eslint-disable import/no-anonymous-default-export */
import dbConnect from '../../../utils/dbConnect'
import Note from '../../../models/Note'


dbConnect();

export default async (req, res) => {
    const { method } = req;
    console.log(method)
    switch (method) {
        case 'GET':
            try {
                const notes = await Note.find({});

                res.status(200).json({ success: true, data: notes })
            } catch (error) {
                res.status(400).json({ success: false });
            }
            console.log("this appears in the browser");
            break;
        case 'POST':
            try {
                const notes = await Note.create(req.body);

                res.status(201).json({ success: true, data: notes })
            } catch (error) {
                res.status(400).json({ success: false });
            }
            console.log("this appears in the browser");
            break;
        default:
            res.status(400).json({ success: false });
            break;
    }
}

