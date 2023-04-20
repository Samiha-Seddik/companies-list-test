export interface ICompanie {
    requestId: number,
    advice: boolean,
    campaignName  : string,
    campaignDescription  : string,
    decisionDeadline  : string |null,
    decisionDescription  : string,
    key  : string,
    numberOfAssets  : number,
    createdDate  : string,
    updatedDate  : string | null,
    submittedDate  : string |null,
    validatedDate  : string |null,
    affiliate  : IAffiliate,
    brand  : IBrand,
    requestStatus  : IRequestStatus,
    createdBy  : IUserInformation,
    updatedBy  : IUserInformation | null,
    submittedBy  : IUserInformation | null,
    validatedBy  : IUserInformation | null,
    countries  : ICountry[],
    media  : IMedia[]
  }
  export interface IUserInformation{
    userInfoId  : number,
    name  :string,
    email  :string
}
  export interface IAffiliate{
        affiliateId  : number,
        name  : string  
  }
  export interface IBrand{
    brandId  : number,
    name  : string  
}
  export interface IRequestStatus {
    requestStatusId  : number,
    name  : string,
    value  : string,
    step  : number
}

  export interface ICountry{
    countryId  : number,
    name  : string,
    value  : string
}
  export interface IMedia{
    mediaId  : number,
    name  : string,
    value  : string
}

