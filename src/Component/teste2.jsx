import React from "react";
import axios from "axios";

class DeleteArticleButton extends React.Component {
  deleteArticle = () => {
    let config = {
      method: "delete",
      maxBodyLength: Infinity,
      url: "http://localhost:8000/api/article/delete/41",
      headers: {},
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        alert("L'article a été supprimé avec succès !");
      })
      .catch((error) => {
        console.error(error);
        alert(
          "Une erreur s'est produite lors de la suppression de l'article. Veuillez réessayer plus tard."
        );
      });
  };

  render() {
    return <button onClick={this.deleteArticle}>Supprimer l'article</button>;
  }
}

export default DeleteArticleButton;
