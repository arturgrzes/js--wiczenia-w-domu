function sumaIloczyn(tablica){
    
    var suma = 0, iloczyn = 1;
    
    for (var i=0; i < tablica.length; i++){
        
        
        suma = suma + tablica[i];
        iloczyn *= tablica[i];
    }
    
    console.log(suma + " " + iloczyn);
    
    
    
}

sumaIloczyn([1, 2, 3, 4, 5, 6]);