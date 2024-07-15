export interface AddIncident{

  incidentLocation: string;
  incidentStatus: string;
  incidentDescription: string;
  incidentImage: string;
  Email: string;
  profile?:string

}

export interface Incident {

  incidentId: string
  incidentLocation: string;
  incidentStatus: string;
  incidentDescription: string;
  incidentImage: string;
  Email: string;
  profile?:string

}

export interface AddResponse{
  message: string;
}