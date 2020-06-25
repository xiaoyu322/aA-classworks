require_relative "Board.rb"
require_relative "pieces.rb"

class Display
    attr_reader :board
    def initialize(board)
        @board = board 
    end

    def render
        board.each do |sub|
            puts sub.symbol
        end
    end

end