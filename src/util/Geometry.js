
    export function inRadians(degrees){
        return degrees*Math.PI/180;
    }
    
    export function lengthDirX(length, direction){
        return Math.sin(inRadians(direction))*length;
    }

    export function lengthDirY(length, direction){
        return Math.cos(inRadians(direction))*length;
    }

    export function slicePie(pieRadius, slices){
        return (pieRadius/slices);
    }

