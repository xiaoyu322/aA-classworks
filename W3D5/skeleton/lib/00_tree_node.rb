require "byebug"
class PolyTreeNode

    def initialize(value)
        @value = value
        @parent = nil
        @children = []
    end

    def value
        @value
    end

    def parent
        @parent
    end

    def children
        @children
    end

    def parent=(target)
        if target != nil
            @parent.children.delete(self) if @parent != nil
            @parent = target
            if !target.children.include?(self)
                target.children << self
            end
        else
            if @parent != nil
                @parent.children.delete(self)
                @parent = nil
            end
        end
    end

    # self.parent=(node)  => self.parent = node

    def add_child(node)
        node.parent = self 
    end

    def remove_child(node)
        if node.parent != self
            raise 'an error'
        else
            node.parent = nil  
        end
    end

    def dfs(target)
        return self if self.value == target
        @children.each do |child| 
            result = child.dfs(target)
            return result unless result == nil
            # if result != nil
            #     return result
            # end
        end
        nil
    end


    def bfs(target)
        queue = [self]
        until queue.empty?
            curr_node = queue.shift 
            return curr_node if curr_node.value == target
            curr_node.children.each do |child|
                queue << child
            end
        end
        nil
    end

end

