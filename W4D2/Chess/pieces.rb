require 'singleton'
module Slideable
    HORIZ_AND_VERT_DIRS = [[0, 1], [0, -1], [1, 0], [-1, 0]]
    DIAGONAL_DIRS = [[1, 1], [-1, 1], [1, -1], [-1, -1]]
    def diagonal_dirs
        DIAGONAL_DIRS
    end
        
    def horiz_and_vert_dirs 
        HORIZ_AND_VERT_DIRS
    end

    def moves
        moves = []
        move_dirs.each do |(x, y)|
            moves.concat(unblocked(x, y)) 
        end
        moves
    end

    def unblocked(row_change, col_change)
        current_pos = pos #[0,0]
        row, col = current_pos
        possible_moves = []  #break
        until  (row+row_change) > 7 || (row+row_change) < 0 || (col+col_change) > 7 || (col+col_change) < 0
            newpos = [row+row_change, col+col_change]
            if self.empty?(newpos) 
                possible_moves << [row+row_change, col+col_change]
            else
                if board[newpos].color != color
                    possible_moves << [row+row_change, col+col_change]
                    break
                else
                    break
                end
            end
            row_change +=1 if row_change > 0
            col_change +=1 if col_change > 0
            row_change -= 1 if row_change < 0
            col_change -=1 if col_change < 0
        end
        possible_moves
        #check if blocked, or take enemy piece
        #iterate through the different positions can go
    end
end

module Stepable
    KING_DIRS = [[1, 1], [1, -1], [-1, 1], [-1, -1], [0, 1], [0, -1], [1, 0], [-1, 0]]
    KNIGHT_DIRS = [[2, 1], [2, -1], [-2, 1], [-2, -1], [1, 2], [1, -2], [-1, 2], [-1, -2]]
    def kings_dirs 
        KING_DIRS
    end

    def knight_dirs 
        KNIGHT_DIRS
    end

    def moves
        current_pos = pos
        row, col = current_pos
        moves = []
        move_dirs.each do |(x, y)|
            newpos = [row + x, col + y]
            if (x + row) < 7 || (y + col) < 7 || (x + row) >= 0 || (y + col) >= 0
                if self.empty?(newpos) 
                    moves << [row + x, col + y]
                else
                    if board[newpos].color != color
                        moves << [row + x, col + y]
                        break
                    else
                        break
                    end
                end
            end  
        end
        moves
    end
end

class Piece
    attr_reader :color, :board 
    attr_accessor :pos
    
    def initialize(color, board, pos)
        @color = color
        @board = board
        @pos = pos
    end

    def empty? (pos)
        return true if @board[pos] == NullPiece.instance 
        return false 
    end
end

class Bishop < Piece
    include Slideable    
    def symbol
        if @color == "black" 
            print '♝'
        else
            print '♗'   
        end
    end
    
    def move_dirs
        diagonal_dirs
    end 
end

class Rook < Piece
    include Slideable    
    def symbol
        if @color == "black"
            print '♜'
        else
            print '♖'   
        end
    end
        
    def move_dirs
        horiz_and_vert_dirs
    end 
end

class Queen < Piece
    include Slideable    
    def symbol
        if @color == "black"
            print '♛'
        else
            print '♕'   
        end
    end
        
    def move_dirs 
        diagonal_dirs + horiz_and_vert_dirs
    end 
end

class Knight < Piece
    include Stepable    
    def symbol
        if @color == "black"
            print '♞'
        else
            print '♘'   
        end
    end
        
    def move_dirs
        knight_dirs
    end 
end

class King < Piece
    include Stepable    
    def symbol
        if @color == "black"
            print '♚'
        else
            print '♔'   
        end
    end
        
    def move_dirs
        kings_dirs
    end 
end

class NullPiece < Piece 
    include Singleton
    attr_reader :symbol 
    
    def initialize
        @color = nil
        @symbol = ""
    end

end


class Pawn < Piece
    def symbol
        if @color == "black"
            print'♟'
        else
            print '♙'   
        end
    end

    def moves 
        move_dirs + side_attacks
    end
        
    def move_dirs
        directions = [[1, 0]]
        start_dir = [[1, 0], [2, 0]]

        moves = []
        current_pos = pos 
        row, col = current_pos 
        if at_start_row?
            start_dir.each do |(row_change, col_change)|
                newpos = [row + row_change, col + col_change]

                if (row_change + row) < 7 || (col_change + col) < 7 || (row_change + row) >= 0 || (col_change + col) >= 0
                    moves << newpos
                end
            end
        else 
            directions.each do |(row_change, col_change)|
                newpos = [row + row_change, col + col_change]

                if (row_change + row) < 7 || (col_change + col) < 7 || (row_change + row) >= 0 || (col_change + col) >= 0
                    moves << newpos
                end 
            end
        end
        moves 
    end
    
    def side_attacks
        attack_dir = [[1, 1], [1, -1]]
        current_pos = pos
        row, col = current_pos
        attack_moves = []

        attack_dir.each do |(row_change, col_change)|
            newpos = [row + row_change, col + col_change]

            if (row_change + row) < 7 || (col_change + col) < 7 || (row_change + row) >= 0 || (col_change + col) >= 0
                if board[newpos].color != color
                    # self[row+dir[0], col+dir[1]] = self
                    # self[current_pos] = NullPiece.instance
                    attack_moves << newpos
                end      
            end
        end
        attack_moves
    end
    
    def at_start_row?
        if self.color == 'black'
            if self.pos[0] == 1 
                return true 
            end
        elsif self.color == 'white'
            if self.pos[0] == 6
                return true
            end
        end
        return false 
    end
    
end
