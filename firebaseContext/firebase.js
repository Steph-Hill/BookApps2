import firestore from "@react-native-firebase/firestore";

class Firebase {


    firestore;

        constructor(){

            this.firestore = firestore();



        }
//liste les Categories

        getCategories = () => this.firestore.collection("Categories").get();  
        
//liste les Articles

        getArticles = () => this.firestore.collection("HillionArticles").get();

//permet la lecture d'un element dans collection   HillionArticles
        getArticleById = (id) => this.firestore.collection("HillionArticles").doc(id).get()

}

export default Firebase