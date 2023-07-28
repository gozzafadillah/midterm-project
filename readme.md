# API List

## Videos

**_Video object_**

```yaml
{
title: string
description: string
url: string
created_at: datetime
}
```

- **_GET /videos_**
  Retrieves all videos in the system.

  - **_URL Params_**
    None
    Headers
    None
    Success Response:
    `Code: 200`
    Content:

        ```yml
        {
          videos: [
            {
            title: "Video Title 1",
            description: "Video Description 1",
            url: "https://example.com/video1",
            created_at: "2023-07-28T12:34:56Z"
            },
            {
            title: "Video Title 2",
            description: "Video Description 2",
            url: "https://example.com/video2",
            created_at: "2023-07-28T13:45:00Z"
            }
            // More videos...
            ]
        }
        ```

- **_POST /videos_**
  Creates a new video in the system.

  - **_URL Params_**
    None
  - **_Data Params_**
    ```yml
    { "title": string, "description": string, "url": string }
    ```
  - **_Headers_**
  - **_Content-Type: application/json_**
  - **_Success Response:_**
    Code: 200
  - **_Content:_**

  ```yml
  { message: "Video created successfully" }
  ```

- **_GET /videos/:id_**
  Retrieves a specific video by its ID.

  - **_URL Params_**
    id (string) - ID of the video to retrieve.
  - **_Headers_**
    None
  - **_Success Response:_**
    Code: 200
  - **_Content:_**
    ```yml
    {
      title: "Video Title",
      description: "Video Description",
      url: "https://example.com/video",
      created_at: "2023-07-28T12:34:56Z",
    }
    ```

## Users

**_User object_**

```yaml
{
username: string
email: string
password: string
created_at: datetime
}
```

- **_POST /signup_**
  Creates a new user account.

  - **_URL Params_**
    None
  - **_Data Params_**
    ```yml
    { "email": string, "username": string, "password": string }
    ```
  - **_Headers_**
  - **_Content-Type: application/json_**
  - **_Success Response:_**
    Code: 200
  - **_Content:_**

  ```yml
  { message: "User created successfully" }
  ```

  - **_Error Response:_**
  - **_Code: 400_**
  - **_Content:_** { "error": "E11000 duplicate key error collection: tokopedia_play.users index: email_1 dup key: { email: \"gozzafadillah@gmail.com\" }" }

- **POST /signin**
  Signs in a user.

  - **_URL Params_**
    None
  - **_Data Params_**
    `yml
        {
"email": string,
"password": string
}
`

                - **_Headers_**
                - **_Content-Type:_** application/json
                - **_Success Response:_**
                - **_Code:_** 200
                - **_Content:_**

                ```yml
                { message: "User signed in successfully" }
                ```

                - **_Error Response:_**
                - **_Code:_** 401
                - **_Content:_** { "error": "Invalid credentials" }

                ## Comments

                Comment object

                ```yml
                {
                text: string
                user_id: string
                video_id: string
                created_at: datetime
                }
                ```

- **_POST /comments_**
  Creates a new comment on a video.

      - **_URL Params_**
        None
      - **_Data Params_**

      ```yml
      { "text": string, "user_id": string, "video_id": string }
      ```

  - **_Headers_**
    - Authorization: `Bearer <token>`
  - **_Content-Type:_** application/json
  - **_Success Response:_**
  - **_Code:_** 200
  - **_Content:_**

  ```yml
  { message: "Comment created successfully" }
  ```

- **GET /comments/:videoId**
  Retrieves all comments in the system.

  - **_URL Params_**
    None
  - **_Headers_**
    None
  - **_Success Response:_**
  - **_Code:_** 200
  - **_Content:_**

  ```yml
    {
    comments: [
    {
    text: "Comment 1",
    user_id: "user1",
    video_id: "video1",
    created_at: "2023-07-28T12:34:56Z"
    },
    {
    text: "Comment 2",
    user_id: "user2",
    video_id: "video1",
    created_at: "2023-07-28T13:45:00Z"
    }
    // More comments...
    ]
    }
  ```

- **POST /product/:videoId**
  Creates a new product related to a specific video.

  - **_URL Params_**
    videoId (string) - ID of the video to associate the product with.
  - **_Data Params_**

  ```yml
  { "name": string, "price": number, "description": string }
  ```

  - **_Headers_**
  - **_Content-Type:_** application/json
  - **_Success Response:_**
    Code: 200
  - **_Content:_**
    ```
      {
        message: "Product created successfully",
      }
    ```

```

```
