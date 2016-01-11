require_relative 'spec_helper'
require_relative '../bank'
p "hello"
describe Bank do
<<<<<<< HEAD


=======
p "hello"
>>>>>>> 9a4cbea4e63d950fbc3668a19204737672bfd173
  describe ".new" do
    it "creates a Bank object" do
      # When Bank.new is called, it should create a bank object
      expect(Bank.new("BoA")).to be_kind_of(Object)

    end
    it "has no accounts" do
      # A newly created bank should have 0 accounts
      boa = Bank.new("BoA")
      expect(boa.accounts).to eq({})

    end
  end

  describe "#name" do
    it "has a name" do
      #bank has a name
      boa = Bank.new("BoA")
      expect(boa.name).to be_kind_of(String)

    end
  end

  describe "#create_account" do
    it "create an account" do
<<<<<<< HEAD
      # Calling bank.create_account with the correct parameters should add
      # the account name and account value to the bank.accounts hash
      boa = Bank.new("BoA")
      expect(boa.create_account("checking", 500)).to eq(500)


=======
      bank = Bank.new("Chase")
      bank.create_account("Tom", 200)
      toms_account = accounts["Tom"]
      expect (toms_account).to eq(200)
>>>>>>> 9a4cbea4e63d950fbc3668a19204737672bfd173
    end
  end

  describe "#deposit" do
    it "deposits money from a client" do
      boa = Bank.new("BoA")
      boa.create_account("checking", 500)
      expect(boa.deposit("checking", 500)).to eq(1000)
      # Calling bank.deposit with the correct parameters should result in an account's value going up by the same amount as the deposit

    end
  end

  describe "#balance" do
    it "returns the balance for the client" do
      # Calling bank.balance should return the balance of the specified account
      boa = Bank.new("BoA")
      boa.create_account("checking", 500)
      expect(boa.balance("checking")).to eq(500)
    end
  end

  describe "#withdraw" do
    it "subtracts money from the account" do
      # Calling bank.withdraw with the correct parameters should result in an account's value going down by the same amount as the withdrawal
      boa = Bank.new("BoA")
      boa.create_account("checking", 500)
      boa.withdraw("checking", 450)
      expect(boa.balance("checking")).to eq(50)

    end

    it "ignores requests for withdrawals greater than account balance" do
      # Calling bank.withdraw with an amount greater than the balance ignores the withdrawal/does nothing
      boa = Bank.new("BoA")
      boa.create_account("checking", 500)
      boa.withdraw("checking", 501)
      expect(boa.balance("checking")).to eq(500)

    end
  end

  describe "#interest" do
    it "adds interest to withdrawn money by 3%" do
      boa = Bank.new("BoA")
      boa.create_account("checking", 500)
      expect(boa.compute_interest("checking")).to eq(515)

    end
  end

end
