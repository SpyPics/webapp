/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPhoto = /* GraphQL */ `
  mutation CreatePhoto(
    $input: CreatePhotoInput!
    $condition: ModelPhotoConditionInput
  ) {
    createPhoto(input: $input, condition: $condition) {
      id
      original {
        bucket
        key
        region
      }
      description
      ready_for_sell
      price
      permalink
      sold_at
      session_id
      latitude
      longitude
      altitude
      width
      height
      size
      content_type
      user_id
      user {
        id
        username
        name
        bio
        photos {
          items {
            id
            original {
              bucket
              key
              region
            }
            description
            ready_for_sell
            price
            permalink
            sold_at
            session_id
            latitude
            longitude
            altitude
            width
            height
            size
            content_type
            user_id
            user {
              id
              username
              name
              bio
              bank_number
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        bank_number
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updatePhoto = /* GraphQL */ `
  mutation UpdatePhoto(
    $input: UpdatePhotoInput!
    $condition: ModelPhotoConditionInput
  ) {
    updatePhoto(input: $input, condition: $condition) {
      id
      original {
        bucket
        key
        region
      }
      description
      ready_for_sell
      price
      permalink
      sold_at
      session_id
      latitude
      longitude
      altitude
      width
      height
      size
      content_type
      user_id
      user {
        id
        username
        name
        bio
        photos {
          items {
            id
            original {
              bucket
              key
              region
            }
            description
            ready_for_sell
            price
            permalink
            sold_at
            session_id
            latitude
            longitude
            altitude
            width
            height
            size
            content_type
            user_id
            user {
              id
              username
              name
              bio
              bank_number
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        bank_number
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deletePhoto = /* GraphQL */ `
  mutation DeletePhoto(
    $input: DeletePhotoInput!
    $condition: ModelPhotoConditionInput
  ) {
    deletePhoto(input: $input, condition: $condition) {
      id
      original {
        bucket
        key
        region
      }
      description
      ready_for_sell
      price
      permalink
      sold_at
      session_id
      latitude
      longitude
      altitude
      width
      height
      size
      content_type
      user_id
      user {
        id
        username
        name
        bio
        photos {
          items {
            id
            original {
              bucket
              key
              region
            }
            description
            ready_for_sell
            price
            permalink
            sold_at
            session_id
            latitude
            longitude
            altitude
            width
            height
            size
            content_type
            user_id
            user {
              id
              username
              name
              bio
              bank_number
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        bank_number
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      username
      name
      bio
      photos {
        items {
          id
          original {
            bucket
            key
            region
          }
          description
          ready_for_sell
          price
          permalink
          sold_at
          session_id
          latitude
          longitude
          altitude
          width
          height
          size
          content_type
          user_id
          user {
            id
            username
            name
            bio
            photos {
              nextToken
            }
            bank_number
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      bank_number
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      username
      name
      bio
      photos {
        items {
          id
          original {
            bucket
            key
            region
          }
          description
          ready_for_sell
          price
          permalink
          sold_at
          session_id
          latitude
          longitude
          altitude
          width
          height
          size
          content_type
          user_id
          user {
            id
            username
            name
            bio
            photos {
              nextToken
            }
            bank_number
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      bank_number
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      username
      name
      bio
      photos {
        items {
          id
          original {
            bucket
            key
            region
          }
          description
          ready_for_sell
          price
          permalink
          sold_at
          session_id
          latitude
          longitude
          altitude
          width
          height
          size
          content_type
          user_id
          user {
            id
            username
            name
            bio
            photos {
              nextToken
            }
            bank_number
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      bank_number
      createdAt
      updatedAt
    }
  }
`;
