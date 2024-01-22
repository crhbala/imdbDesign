// movies collection
[{
  _id: ObjectId("movie_id"),
  title: "Movie Title",
  release_date: ISODate("2022-01-01T00:00:00Z"),
  genres: ["Action", "Drama"],
  media: [
    {
      _id: ObjectId("media_id_1"),
      type: "Video",
      url: "video_url_1"
    },
    {
      _id: ObjectId("media_id_2"),
      type: "Image",
      url: "image_url_1"
    }
  ],
  reviews: [
    {
      _id: ObjectId("review_id_1"),
      user_id: ObjectId("user_id_1"),
      rating: 4.5,
      comment: "Great movie!"
    },
    {
      _id: ObjectId("review_id_2"),
      user_id: ObjectId("user_id_2"),
      rating: 3.0,
      comment: "Average movie."
    }
  ]
}]

// genres collection
[{
  _id: ObjectId("genre_id"),
  name: "Action"
}]

// users collection
[{
  _id: ObjectId("user_id"),
  username: "user123",
  reviews: [
    ObjectId("review_id_1"),
    ObjectId("review_id_2")
  ]
}]

// artists collection
[{
  _id: ObjectId("artist_id"),
  name: "Artist Name",
  skills: ["Acting", "Directing"],
  movies: [
    {
      _id: ObjectId("movie_id_1"),
      roles: ["Actor", "Director"]
    },
    {
      _id: ObjectId("movie_id_2"),
      roles: ["Actor"]
    }
  ]
}]
