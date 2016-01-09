class Bank

  attr_accessor :name
  attr_reader :accounts

  def initialize(name)
    @name = name
    @accounts = {}

  end

  def create_account(account, firstdeposit)
    accounts[account] = firstdeposit
  end

  def deposit(account, amount)
    accounts[account] += amount
  end

  def withdraw(account, amount)
    accounts[account] -= amount if amount <= accounts[account]
  end

  def balance(account)
    accounts[account]
  end

  # def list_accounts
  #
  # end

  def compute_interest(account)
    balance(account) * 1.03

  end
end

boa = Bank.new("BoA")
boa.create_account("checking", 1000)
puts boa.compute_interest("checking")







