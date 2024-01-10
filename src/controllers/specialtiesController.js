import specialtiesService from "../services/SpecialtiesService"

let getAllSpecialty = async (req, res) => {
    let spec = await clinicService.getAllClinic();
    if (spec) {
        return res.status(200).json({
            errCode: 0,
            message: 'OK',
            spec: spec,
        })
    } else {
        return res.status(400).json({
            errCode: 1,
            message: 'there is no spec in the list'
        })
    }
}

let createSpecialty = async (req, res) => {
    let message = await specialtiesService.createSpecialty(req.body);
    return res.status(200).json(message);
}

let editSpecialty = async (req, res) => {
    let message = await specialtiesService.editSpecialty(req.body);
    return res.status(200).json(message);
}

let deleteSpecialty = async (req, res) => {
    if (!req.body.id) {
        return res.status(400).json({
            errCode: 1,
            message: 'Missing requirement parameters!'
        })
    }
    let message = await specialtiesService.deleteSpecialties(req.body.id);
    if (message) {
        return res.status(200).json(message);
    } else {
        return res.status(500).json({
            errorCode: 2,
            message: 'Error deleting user'
        });
    }
}

module.exports = {
    getAllSpecialty: getAllSpecialty,
    createSpecialty: createSpecialty,
    editSpecialty: editSpecialty,
    deleteSpecialty: deleteSpecialty

}