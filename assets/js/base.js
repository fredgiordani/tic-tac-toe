$(document).ready(function(){
    
    let number_of_case = 9;

    let symbol = '';
    let player = 'player one begins';
    

    $('.player').text(player);

    function full_grid(grid){

            let full_grid = 0;

            grid.forEach(line => {
                
                for (let i = 0; i < line.length; i++) {
                    if(line[i] !== ""){
                        full_grid += 1;
                    }

                }
            });

            if (full_grid === 9){
                $('.victory').text('égalité');
                $('.victory').append('<form><button  type="submit" class = "btn btn-primary">REJOUER</button></form>')
            }else{
                full_grid =0;
            }
    }

    function line(grid){

        grid.forEach(line => {
            if( line[0]=== "X" && line[0] === line[1] && line[1] === line[2]){
                $('.victory').text('player one gagne');
                $('.info').text('partie terminée');
                $('.victory').append('<form><button  type="submit" class = "btn btn-primary">REJOUER</button></form>')
                
            }else if( line[0]=== "O" && line[0] === line[1] && line[1] === line[2]){
                $('.victory').text('player two gagne');
                $('.info').text('partie terminée');
                $('.victory').append('<form><button  type="submit" class = "btn btn-primary">REJOUER</button></form>')
                    
            }
       
        }
        )}

    function column(grid){
        let count_X = 0;
        let count_O = 0;

        for (let i = 0; i < grid.length; i++) {
            
            grid.forEach(line => {
            
                if(line[i] === "X"){count_X +=1
                }else if(line[i] === "O"){count_O +=1}

                if(count_X === 3){
                    
                    $('.victory').text('player one gagne');
                    $('.info').text('partie terminée');
                    $('.victory').append('<form><button  type="submit" class = "btn btn-primary">REJOUER</button></form>')
                    
                }else if(count_O === 3){
                    
                
                $('.victory').text('player two gagne');
                $('.info').text('partie terminée');
                $('.victory').append('<form><button  type="submit" class = "btn btn-primary">REJOUER</button></form>')
                
                }
            
                });

        count_X = 0;
        count_O = 0;
        
    }}

    function diagonals(grid){
        if( (grid[0][0]=== "X" && grid[0][0] === grid[1][1] && grid[1][1] === grid[2][2]) || (grid[0][2]=== "X" && grid[0][2] === grid[1][1] && grid[1][1] === grid[2][0])){
            $('.victory').text('player one gagne');
            $('.info').text('partie terminée');
            $('.victory').append('<form><button  type="submit" class = "btn btn-primary">REJOUER</button></form>')
        }else if( (grid[0][0]=== "O" && grid[0][0] === grid[1][1] && grid[1][1] === grid[2][2]) || (grid[0][2]=== "O" && grid[0][2] === grid[1][1] && grid[1][1] === grid[2][0])){
            $('.victory').text('player two gagne');
            $('.info').text('partie terminée');
            $('.victory').append('<form><button  type="submit" class = "btn btn-primary">REJOUER</button></form>')
        }

    }


    



    $(".case").on('click',function(){


        if($('.info').text() === 'partie terminée'){
            console.log('ok');
        }else{



        
        if(number_of_case % 2 !== 0){ 
            player = 'player two it\'s your turn';
             symbol = "X";
        }else{ 
            player = 'player one it\'s your turn';
            symbol = "O"; 
        }
        
        








        if($(this).text() === "" && number_of_case !== 0 ){
            
            $(this).text(symbol);
            
            grid = [
                [$(".case1").text(), $(".case2").text(), $(".case3").text()],
                [$(".case4").text(), $(".case5").text(), $(".case6").text()],
                [$(".case7").text(), $(".case8").text(), $(".case9").text()],
            ]
            
            
            

            
            
            full_grid(grid);
            line(grid);
            column(grid);
            diagonals(grid);

            
            
            
            
            number_of_case -= 1;
            $('.player').text(player);
            
            
        }else if($(this).text() !== "" && number_of_case !== 0 ){
            $('.info').text('la case est occupée');
        }else{
            $('.info').text('la grille est pleine');    
        } 
    
    }
    })
    
  
    







})