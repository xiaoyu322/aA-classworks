require "byebug"
require_relative "00_tree_node"
class KnightPathFinder
    attr_reader :root

    def initialize(startpos)
        # kpf = KnightPathFinder.new([0, 0])
        build_move_tree
    end

    def self.root_node
        @root = PolyTreeNode.new([0, 0])
    end

    def self.valid_moves(pos)
        # return all the possible moves of that pos
        # pos = [x, y]
        moves = []
        x = pos[0]
        y = pos[1]
        possible_dis = [[2, 1], [2, -1], [-2, 1], [-2, -1], [1, 2], [1, -2], [-1, 2], [-1, -2]]
        possible_dis.each do |subarr|
            if subarr[0] + x >= 0 && subarr[0]+x <= 7 && subarr[1]+y >= 0 && subarr[1]+y <= 7
                newpos = [subarr[0]+x, subarr[1]+y]
                moves << newpos
            end
        end
        return moves
    end 

    def build_move_tree
        @root = PolyTreeNode.new([0, 0])
        tree = [@root]
        visited = []
        until tree.empty?
            current = tree.shift
            possiblemoves = KnightPathFinder.valid_moves(current.value)
            possiblemoves.each do |destination|
                unless visited.include?(destination)
                    visited << destination
                    new = PolyTreeNode.new(destination)
                    tree << new
                    current.add_child(new)
                end
            end
        end
        nil
    end

    # def find_path(pos)  
    #     queue = [@root]          #instance of KnightPathfinder inside an array
    #     path = []
    #     until queue.empty? 
    #         curr_node = queue.shift 
    #         if curr_node.value == pos
    #             path << find_path(curr_node.parent.value)
    #         end
    #         curr_node.children.each do |child|
    #             queue << child
    #         end
    #     end
    #     return path 
    # end

    def find_path(pos)
        @root.bfs(pos)  
    end

    def trace_path_back(pos)
        result = []
        curr_node = find_path(pos)
        until curr_node.parent  == nil
            result.unshift(curr_node.parent.value)
            curr_node = curr_node.parent 
        end
        result << find_path(pos).value 
        result 
    end
    # kpf.find_path([7, 6]) # => [[0, 0], [1, 2], [2, 4], [3, 6], [5, 5], [7, 6]]
        
end

