enum POST_TYPES {
  NORMAL = "normal",
  EVENT = "event"
}

export class Post {
    private id: string
    private photo: string
    private description: string
    private type: POST_TYPES
    private createdAt: string
    private authorId: string

    constructor(
      id: string,
      photo: string,
      description: string,
      type: string,
      createdAt: string,
      authorId: string,
    ) {
      this.id = id
      this.photo = photo
      this.description = description
      this.createdAt = createdAt
      this.authorId = authorId

      if(type.toUpperCase() === POST_TYPES.NORMAL){
        this.type = POST_TYPES.NORMAL
      } else if (type.toUpperCase() === POST_TYPES.EVENT){
        this.type = POST_TYPES.EVENT
      } else {
        throw new Error("Insert a valid type: 'normal' or 'event'.")
      }
    }
    public getId = () => this.id
    public getPhoto = () => this.photo
    public getDescription = () => this.description
    public getType = (): POST_TYPES => this.type
    public getCreateAt = () => this.createdAt
    public getAuthorId = () => this.authorId

    public setType(type: POST_TYPES){
      this.type = type
      return this
   }
 }

export interface CreatePostInput {
   photo: string,
   description: string,
   type: string
}

export interface GetPostByIdInput {
  id: string
}

export function postTypeToString(type: POST_TYPES): string {
  if (type === "event"){
    return "event";
  }
  return "normal";
}


