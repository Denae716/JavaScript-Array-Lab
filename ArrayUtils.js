class ArrayUtils{


     isEmpty(array){
        if (array.length !== 0){
        return false;
        }
    }
    
    append(original, value){
        for (let i = 0; i <= original.length; i ++){
            if(i === original.length -1){
                original += value
            }
        }

        return original
    }

    clone(original){
        const array = []
        for(let i = 0; i <= original.length; i++){
            array += orginal
        }
        return array
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
        for (let i = 0; i <= original.length; i ++){
            if (i === value){
            return i
            }
        }
        
    }

    remove(original, value){
        for (let i = 0; i <= original.length; i ++){
            if (i !== value){
                value += original[i]
            }
        }
        return orginal;
    
    }
    

    reverse(original){
        let array = []
        for(let i = original.length - 1; i >= 0; i--){
            array += original[i]
        }
        return array
    }
    
}
const arrayTest = ["hello", "goodbye", 'I love you']
remove(arrayTest, "hello")
console.log(arrayTest)


