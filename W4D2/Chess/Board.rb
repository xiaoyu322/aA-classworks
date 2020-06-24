class Board
    def initialize(n)
        @grid = Array.new(n){Array.new(n, Piece.new())}
    end

    def [](pos)
        row, col = pos
        @grid[row][col]
    end

    def []=(pos, val)
        row, col = pos
        @grid[row][col] = value 
    end

    def move_piece(start_pos, end_pos)
        raise "No piece at start_pos" if self[start_pos].empty?
        raise "Cannot move to end_pos" if !self[end_pos].empty?

    end
end

class Piece
end