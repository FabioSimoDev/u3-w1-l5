export const getComment = async function (movieId, setCommentsFunc) {
  try {
    const response = await fetch(
      "https://striveschool-api.herokuapp.com/api/comments/" + movieId,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNhNjljNWY2ZTNkZDAwMTQ5NWU0NjUiLCJpYXQiOjE2OTgzMjY5ODEsImV4cCI6MTY5OTUzNjU4MX0.zhKwKRo5Y-CAYexH6vgdyvWmMId_znCHZlW7hGmH7I4"
        }
      }
    );
    if (response.ok) {
      const comments = await response.json();
      if (setCommentsFunc) {
        setCommentsFunc(comments);
      }
      return comments;
    } else {
      throw new Error("errore nell'ottenere i commenti");
    }
  } catch (error) {
    console.log(error.message);
  }
};

export const publishComment = async function (commentData, setCommentsFunc) {
  try {
    const response = await fetch(
      `https://striveschool-api.herokuapp.com/api/comments/`,
      {
        method: "POST",
        body: JSON.stringify(commentData),
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNhNjljNWY2ZTNkZDAwMTQ5NWU0NjUiLCJpYXQiOjE2OTgzMjY5ODEsImV4cCI6MTY5OTUzNjU4MX0.zhKwKRo5Y-CAYexH6vgdyvWmMId_znCHZlW7hGmH7I4",
          "Content-type": "application/json"
        }
      }
    );
    if (response.ok) {
      getComment(commentData.elementId, setCommentsFunc);
      window.location.href = "#comments";
      console.log("commento postato");
    } else {
      throw new Error("ERRORE NELLA FETCH");
    }
  } catch (error) {
    console.log(error);
  }
};
