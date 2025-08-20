import { getAllContacts, getContactsForDMList, searchContacts } from "../controllers/ContactsController.js";
import { verifyToken } from "../middlewares/AuthMiddleware.js";
import { Router } from "express"

const contactsRoutes = Router()

contactsRoutes.post("/search", verifyToken, searchContacts)
contactsRoutes.get("/get-contact-for-dm", verifyToken, getContactsForDMList)
contactsRoutes.get("/get-all-contacts", verifyToken, getAllContacts)

export default contactsRoutes;