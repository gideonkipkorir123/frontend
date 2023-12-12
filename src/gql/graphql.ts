/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** Date scalar type */
  Date: { input: any; output: any; }
  /** The `Upload` scalar type represents a file upload. */
  Upload: { input: any; output: any; }
};

export type Auth = {
  __typename?: 'Auth';
  /** Example field (placeholder) */
  exampleField: Scalars['Int']['output'];
};

export type CreateAuthInput = {
  /** email field (placeholder) */
  email: Scalars['String']['input'];
  /** password field */
  hashedPassword: Scalars['String']['input'];
  /** username field  (placeholder) */
  username: Scalars['String']['input'];
};

export type CreateProductInput = {
  /** Products brand field */
  brand: Scalars['String']['input'];
  /** Product brand field  */
  image: Scalars['String']['input'];
  /** Product name field  */
  name: Scalars['String']['input'];
  /** Product number field */
  price?: Scalars['Float']['input'];
  /** Product price quantity field */
  quantity: Scalars['Float']['input'];
};

export type CreateSessionInput = {
  /** id field (placeholder) */
  id: Scalars['String']['input'];
  /** quantity number  (placeholder) */
  quantity: Scalars['Float']['input'];
};

export type CreateSessionResponse = {
  __typename?: 'CreateSessionResponse';
  /** URL session return  (placeholder) */
  url: Scalars['String']['output'];
};

export type CreateTodoInput = {
  /** input todo description */
  description: Scalars['String']['input'];
  /** input todo title */
  title: Scalars['String']['input'];
};

export type CreateTokenInput = {
  /** Example field (placeholder) */
  exampleField: Scalars['Int']['input'];
};

export type CreateUserInput = {
  /** Example field (placeholder) */
  exampleField: Scalars['Int']['input'];
};

export type Logindto = {
  /** email field  */
  email: Scalars['String']['input'];
  /** password field */
  password: Scalars['String']['input'];
};

export type LogOutResponse = {
  __typename?: 'LogOutResponse';
  /** Example field (placeholder) */
  loggedOut: Scalars['Boolean']['output'];
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  user: User;
};

export type Mutation = {
  __typename?: 'Mutation';
  createProduct: Product;
  createSessionInput: CreateSessionResponse;
  createTodo: Todo;
  createToken: Token;
  createUser: User;
  getNewTokens: NewTokenResponse;
  login: LoginResponse;
  logout: LogOutResponse;
  refreshToken: Scalars['String']['output'];
  register: RegisterResponse;
  removePayment: Payment;
  removeProduct: Product;
  removeTodo: Todo;
  removeToken: Token;
  signIn: SignResponse;
  signUp: SignResponse;
  updateAuth: Auth;
  updatePayment: Payment;
  updateProduct: Product;
  updateProfile: User;
  updateTodo: Todo;
  updateToken: Token;
};


export type MutationCreateProductArgs = {
  createProductInput: CreateProductInput;
};


export type MutationCreateSessionInputArgs = {
  items: Array<CreateSessionInput>;
};


export type MutationCreateTodoArgs = {
  createTodoInput: CreateTodoInput;
};


export type MutationCreateTokenArgs = {
  createTokenInput: CreateTokenInput;
};


export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};


export type MutationLoginArgs = {
  loginUser: Logindto;
};


export type MutationLogoutArgs = {
  id: Scalars['String']['input'];
};


export type MutationRegisterArgs = {
  registerInput: RegisterDto;
};


export type MutationRemovePaymentArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveProductArgs = {
  id: Scalars['String']['input'];
};


export type MutationRemoveTodoArgs = {
  id: Scalars['String']['input'];
};


export type MutationRemoveTokenArgs = {
  id: Scalars['Int']['input'];
};


export type MutationSignInArgs = {
  signininput: SignInInput;
};


export type MutationSignUpArgs = {
  createAuthInput: CreateAuthInput;
};


export type MutationUpdateAuthArgs = {
  updateAuthInput: UpdateAuthInput;
};


export type MutationUpdatePaymentArgs = {
  updatePaymentInput: UpdatePaymentInput;
};


export type MutationUpdateProductArgs = {
  updateProductInput: UpdateProductInput;
};


export type MutationUpdateProfileArgs = {
  file?: InputMaybe<Scalars['Upload']['input']>;
  username: Scalars['String']['input'];
};


export type MutationUpdateTodoArgs = {
  updateTodoInput: UpdateTodoInput;
};


export type MutationUpdateTokenArgs = {
  updateTokenInput: UpdateTokenInput;
};

export type NewTokenResponse = {
  __typename?: 'NewTokenResponse';
  /** AccessToken field */
  accessToken: Scalars['String']['output'];
  /** Refresh Token field */
  refreshToken: Scalars['String']['output'];
};

export type Payment = {
  __typename?: 'Payment';
  /** Example field (placeholder) */
  id: Scalars['String']['output'];
  /** Example field (placeholder) */
  quantity: Scalars['Int']['output'];
};

export type Product = {
  __typename?: 'Product';
  /** Products brand field  */
  brand: Scalars['String']['output'];
  /** Product image field */
  image: Scalars['String']['output'];
  /** Product name field  */
  name: Scalars['String']['output'];
  /** Product number field */
  price: Scalars['Float']['output'];
  /** Product quantity field */
  quantity: Scalars['Float']['output'];
};

export type Query = {
  __typename?: 'Query';
  auth: Auth;
  hello: Scalars['String']['output'];
  payment: Payment;
  product: Product;
  products: Array<Product>;
  todo: Todo;
  todos: Array<Todo>;
  token: Token;
  user: User;
};


export type QueryAuthArgs = {
  id: Scalars['Int']['input'];
};


export type QueryPaymentArgs = {
  id: Scalars['Int']['input'];
};


export type QueryProductArgs = {
  id: Scalars['String']['input'];
};


export type QueryTodoArgs = {
  id: Scalars['String']['input'];
};


export type QueryTokenArgs = {
  id: Scalars['Int']['input'];
};


export type QueryUserArgs = {
  id: Scalars['Int']['input'];
};

export type RegisterDto = {
  confirmPassword: Scalars['String']['input'];
  email: Scalars['String']['input'];
  hashedPassword: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type RegisterResponse = {
  __typename?: 'RegisterResponse';
  user?: Maybe<User>;
};

export type SignInInput = {
  /** email field  */
  email: Scalars['String']['input'];
  /** password field */
  password: Scalars['String']['input'];
};

export type SignResponse = {
  __typename?: 'SignResponse';
  /** AccessToken field */
  accessToken: Scalars['String']['output'];
  /** AccessToken field */
  refreshToken: Scalars['String']['output'];
  user: User;
};

export type Todo = {
  __typename?: 'Todo';
  /** string field */
  createdAt: Scalars['Date']['output'];
  /** Example field (placeholder) */
  description: Scalars['String']['output'];
  /** string field */
  id: Scalars['ID']['output'];
  /** Example field (placeholder) */
  title: Scalars['String']['output'];
};

export type Token = {
  __typename?: 'Token';
  /** Example field (placeholder) */
  exampleField: Scalars['Int']['output'];
};

export type UpdateAuthInput = {
  /** email field (placeholder) */
  email?: InputMaybe<Scalars['String']['input']>;
  /** password field */
  hashedPassword?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  /** username field  (placeholder) */
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UpdatePaymentInput = {
  /** Example field (placeholder) */
  exampleField?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['Int']['input'];
};

export type UpdateProductInput = {
  /** Products brand field */
  brand?: InputMaybe<Scalars['String']['input']>;
  /** update product id input  (placeholder) */
  id: Scalars['String']['input'];
  /** Product brand field  */
  image?: InputMaybe<Scalars['String']['input']>;
  /** Product name field  */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Product number field */
  price?: InputMaybe<Scalars['Float']['input']>;
  /** Product price quantity field */
  quantity?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateTodoInput = {
  /** input todo description */
  description?: InputMaybe<Scalars['String']['input']>;
  /** update to do input  (placeholder) */
  id: Scalars['String']['input'];
  /** input todo title */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateTokenInput = {
  /** Example field (placeholder) */
  exampleField?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['Int']['input'];
};

export type User = {
  __typename?: 'User';
  avatarUrl?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  email: Scalars['String']['output'];
  /** id field description */
  id?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
  /** username field description */
  username: Scalars['String']['output'];
};
