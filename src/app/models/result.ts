import { Geometry } from "./geometry";
import { Photo } from "./photo";

export interface Result{
    geometry : Geometry
    icon : string
    icon_background_color : string
    icon_mask_base_uri : string
    name : string
    photos : Photo[]
    place_id : string
    reference : string
    scope : string
    types : string[]
    vicinity : string
}