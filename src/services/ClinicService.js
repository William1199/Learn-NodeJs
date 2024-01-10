import { resolveInclude } from "ejs";
import db from "../models/index";

let checkClinicExistByAddress = (clinicAddress) => {
    return new Promise(async (resolve, reject) => {
        try {
            let clinic = await db.Clinic.findOne({
                where: { address: clinicAddress }
            })
            console.log(clinic);
            if (clinic) {
                resolve(true);
            } else {
                resolve(false);
            }
        } catch (e) {
            reject(e);
        }
    })
}

let getAllClinics = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let clinic = await db.Clinic.findAll();
            if (clinic) {
                resolve(clinic)
            } else {
                reject(e)
            }
        } catch (e) {
            reject(e);
        }
    })
}

let getClinicByID = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let clinic = await db.Clinic.findOne({
                where: { id: id }
            })
            if (clinic) {
                resolve(clinic)
            } else {
                resolve({
                    errCode: 1,
                    message: 'Cant find clinic with that id',
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

let createClinic = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let checkExist = await checkClinicExistByAddress(data.address);
            if (checkExist) {
                resolve({
                    errCode: 1,
                    errMessage: "this Clinic with that address already used in this system! please try again!"
                })
            } else {
                let clinicName = await db.Clinic.findOne({
                    where: { name: data.name }
                })
                if (clinicName) {
                    await db.Clinic.create({
                        name: data.name,
                        address: data.address,
                        description: data.description,
                        image: data.image,
                    })
                    resolve({
                        errCode: 0,
                        errMessage: 'OK'
                    })
                } else {
                    resolve({
                        errCode: 1,
                        errMessage: 'this clinic have different name in the system! try again'
                    })
                }
            }
        } catch (e) {
            reject(e);
        }
    })
}

let editClinic = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.id) {
                resolve({
                    errCode: 1,
                    errMessage: "Missing input parameter"
                })
            }
            let clinic = await db.Clinic.findOne({
                where: { id: data.id }
            })
            if (clinic) {
                clinic.name = data.name;
                clinic.address = data.address;
                clinic.description = data.description;
                clinic.image = data.image;
                await clinic.save();
                resolve({
                    errCode: 0,
                    message: 'Update Clinic successfull'
                });
            } else {
                resolve({
                    errCode: 0,
                    errMessage: 'Clinic not found!'
                });
            }
        } catch (e) {
            reject(e);
        }
    })
}

let deleteClinic = (ClinicId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let clinic = await db.Clinic.findOne({
                where: { id: ClinicId }
            })
            if (clinic) {
                await db.Clinic.destroy({
                    where: { id: ClinicId }
                })
                resolve({
                    errCode: 0,
                    errMessage: "Delete success"
                })
            } else {
                resolve({
                    errCode: 1,
                    errMessage: "Clinic not found"
                })
            }
        } catch (e) {
            reject(e);
        }
    })
}

module.exports = {
    getAllClinics: getAllClinics,
    getClinicByID: getClinicByID,
    createClinic: createClinic,
    editClinic: editClinic,
    deleteClinic: deleteClinic,
}
