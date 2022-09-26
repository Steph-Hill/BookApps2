import firestore from "@react-native-firebase/firestore";
import auth from '@react-native-firebase/auth';


class Firebase {


    firestore;
    auth;

        constructor(){

            this.firestore = firestore();
                
            this.auth = auth();


        }
//liste les Categories

        getCategories = () => this.firestore.collection("Categories").get();  
        
//liste les Articles

        getArticles = () => this.firestore.collection("HillionArticles").get();

//permet la lecture d'un element dans collection   HillionArticles
        getArticleById = (id) => this.firestore.collection("HillionArticles").doc(id).get()

}

export default Firebase