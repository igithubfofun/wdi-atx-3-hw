require_relative 'spec_helper'
require_relative '../bank'

describe Bank do

bank = Bank.new

  describe ".new" do
    it "creates a Bank object" do
      # When Bank.new is called, it should create a bank object
      bank.name = 'BoA'
      expect(bank.name).to eq('BoA')

    end
    it "has no accounts" do
      # A newly created bank should have 0 accounts
      expect(bank).to eq({})
    end
  end

  describe "#name" do
    it "has a name" do
      expect(bank.name = "BoA").to eq bank.name

    end
  end

  describe "#create_account" do
    it "create an account" do
      # Calling bank.create_account with the correct parameters should add
      # the account name and account value to the bank.accounts hash
      expect(bank.create_account("BoA", 500)).to eq(create_account("BoA", 500))

    end
  end

  describe "#deposit" do
    it "deposits money from a client" do
      # Calling bank.deposit with the correct parameters should result in an account's value going up by the same amount as the deposit

    end
  end

  describe "#balance" do
    it "returns the balance for the client" do
      # Calling bank.balance should return the balance of the specified account

    end
  end

  describe "#withdraw" do
    it "subtracts money from the account" do
      # Calling bank.withdraw with the correct parameters should result in an account's value going down by the same amount as the withdrawal

    end

    it "ignores requests for withdrawals greater than account balance" do
      # Calling bank.withdraw with an amount greater than the balance ignores the withdrawal/does nothing

    end
  end

end
