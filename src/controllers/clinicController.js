import clinicService from '../services/ClinicService';

let getAllClinic = async (req, res) => {
    let clinic = await clinicService.getAllClinics();
    if (clinic) {
        return res.status(200).json({
            errCode: 0,
            message: 'OK',
            clinics: clinic,
        })
    } else {
        return res.status(400).json({
            errCode: 1,
            message: 'there is no clinic in the list'
        })
    }
}

let getClinicByID = async (req, res) => {
    let clinicId = req.body.id;
    console.log(clinicId);
    if (!clinicId) {
        return res.status(400).json({
            errCode: 1,
            message: "Missing input parameter",
        })
    }
    let clinic = await clinicService.getClinicByID(clinicId);
    if (clinic) {
        return res.status(200).json({
            errCode: 0,
            message: "OK",
            clinicById: clinic
        })
    }
}

let createClinic = async (req, res) => {
    let message = await clinicService.createClinic(req.body);
    return res.status(200).json(message);
}

let deleteClinic = async (req, res) => {
    if (!req.body.id) {
        return res.status(400).json({
            errCode: 1,
            message: 'Missing input parameter'
        })
    }
    let message = await clinicService.deleteClinic(req.body.id);
    if (message) {
        return res.status(200).json(message);
    } else {
        return res.status(500).json({
            errorCode: 2,
            message: 'Error deleting clinic'
        });
    }
}

let editClinic = async (req, res) => {
    let data = req.body;
    let message = await clinicService.editClinic(data);
    console.log(data);
    return res.status(200).json(message);
}

module.exports = {
    getAllClinic: getAllClinic,
    getClinicByID: getClinicByID,
    createClinic: createClinic,
    deleteClinic: deleteClinic,
    editClinic: editClinic
}