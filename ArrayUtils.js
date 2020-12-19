class ArrayUtils{


     isEmpty(array){
        if (array.length === 0){
        return false;
        }
    }
    
    append(original, value){
        
        return original.push(value);
    }

    clone(original){
        
        return original.slice();
    }

    subArray(original, from, to){
        
        return original;
    }

    equals(arr1, arr2){
        if(arr1 !== arr2){
        return false;
        }
    }

    fill(original, value){

    }

    indexOf(original, value){
        
        return -1;
    }

    remove(original, value){
        
        return original;
    
    }

    reverse(original){

    }
    
}


