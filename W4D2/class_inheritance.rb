class Employee
    attr_reader :name, :title, :salary
    attr_accessor :boss
    def initialize(name, title, salary, boss = nil)
        @name = name
        @title = title
        @salary = salary
        @boss = boss
    end

    def boss=(boss)
        @boss = boss 
        boss.add_employee(self) 
        boss 
    end

    def bonus(mutiplier)
        bonus = self.salary * mutiplier
    end
end

class Manager < Employee
    attr_reader :employees
    def initialize(name, title, salary, boss = nil)
        super(name, title, salary, boss) #person A
        @employees = [] 
    end

    def add_employee(worker)
        @employees << worker 
    end
end
