import { useState, useEffect, useReducer } from "react";
import { db } from "../firebase/config";
import { updateDoc, doc, Timestamp, addDoc, collection} from "firebase/firestore";


const initialize = {
    loading: null,
    error: null
};

const updateReducer = (state, action) => {
    switch(action.type) {
        case "LOADING":
            return {loading: true, error: null};
        case "UPDATED_DOC":
            return {loading: false, error: null};
        case "ERROR":
            return {loading: false, error: action.payload};
        default:
            return state;
    }
};

export const useUpdateDocument = (docCollection) => {
    const [response, dispatch] = useReducer(updateReducer, initialize);

    const [cancelled, setCancelled] = useState("");
    const checkCancelBeforeDispatch = (action) => {
        if(!cancelled){
            dispatch(action);
        }
    };

    const updateDocument = async (id, data) => {
        checkCancelBeforeDispatch({
            type: "LOADING",
        });

        try {
            const docRef = await doc(db, docCollection, id);
            const updatedDocument = await updateDoc(docRef, data);


            checkCancelBeforeDispatch({
                type: "UPDATED_DOC",
                payload: updatedDocument,
            });
        } catch(error) {

        }
    };
    useEffect(() => {
        return () => setCancelled(true);
    }, []);

    return { updateDocument, response};
}