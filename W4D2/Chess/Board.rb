require_relative 'pieces'
class Board
    def initialize(n=8)
        @grid = Array.new(n){Array.new(n, NullPiece.instance)}
    end

    def [](pos)
        row, col = pos
        @grid[row][col]
    end

    def []=(pos, value)
        row, col = pos
        @grid[row][col] = value 
    end

    def move_piece(start_pos, end_pos)
        raise "No piece at start_pos" if self[start_pos].empty?
        raise "Cannot move to end_pos" if !self[end_pos].empty?
        self[end_pos] = self[start_pos]
        self[start_pos] = NullPiece.instance
    end
    
    def add_piece(pos, piece)
        self[pos] = piece
    end

    def fill_board
       self.add_piece([0, 0], Rook.new('black', self, [0,0]))
       self.add_piece([0, 1], Knight.new('black', self, [0,1]))
       self.add_piece([0, 2], Bishop.new('black', self, [0,2]))
       self.add_piece([0, 3], Queen.new('black', self, [0,3]))
       self.add_piece([0, 4], King.new('black', self, [0,4]))
       self.add_piece([0, 5], Bishop.new('black', self, [0,5]))
       self.add_piece([0, 6], Knight.new('black', self, [0,6]))
       self.add_piece([0, 7], Rook.new('black', self, [0,7]))
       self.add_piece([1, 0], Pawn.new('black', self, [1,0]))
       self.add_piece([1, 1], Pawn.new('black', self, [1,1]))
       self.add_piece([1, 2], Pawn.new('black', self, [1,2]))
       self.add_piece([1, 3], Pawn.new('black', self, [1,3]))
       self.add_piece([1, 4], Pawn.new('black', self, [1,4]))
       self.add_piece([1, 5], Pawn.new('black', self, [1,5]))
       self.add_piece([1, 6], Pawn.new('black', self, [1,6]))
       self.add_piece([1, 7], Pawn.new('black', self, [1,7]))

       self.add_piece([7, 0], Rook.new('white', self, [7,0]))
       self.add_piece([7, 1], Knight.new('white', self, [7,1]))
       self.add_piece([7, 2], Bishop.new('white', self, [7,2]))
       self.add_piece([7, 3], Queen.new('white', self, [7,3]))
       self.add_piece([7, 4], King.new('white', self, [7,4]))
       self.add_piece([7, 5], Bishop.new('white', self, [7,5]))
       self.add_piece([7, 6], Knight.new('white', self, [7,6]))
       self.add_piece([7, 7], Rook.new('white', self, [7,7]))
       self.add_piece([6, 0], Pawn.new('white', self, [6,0]))
       self.add_piece([6, 1], Pawn.new('white', self, [6,1]))
       self.add_piece([6, 2], Pawn.new('white', self, [6,2]))
       self.add_piece([6, 3], Pawn.new('white', self, [6,3]))
       self.add_piece([6, 4], Pawn.new('white', self, [6,4]))
       self.add_piece([6, 5], Pawn.new('white', self, [6,5]))
       self.add_piece([6, 6], Pawn.new('white', self, [6,6]))
       self.add_piece([6, 7], Pawn.new('white', self, [6,7]))
    end

    def print_board 
        @grid.each do |sub|
            sub.each do |piece|
                print piece.symbol
            end
            puts
        end
        return
    end
end