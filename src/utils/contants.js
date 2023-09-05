const GOOGLE_API_KEY = "AIzaSyDVEgwNbHeW1-tBkWIWNf9smN-s7csjf2c";

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" + GOOGLE_API_KEY;
