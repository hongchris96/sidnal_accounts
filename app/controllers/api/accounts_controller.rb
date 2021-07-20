class Api::AccountsController < ApplicationController
  def index
    @accounts = Accounts.all
    render :index
  end

  def show
    @account = Account.find_by(id: params[:id])
    render :show
  end

  def create
    @account = Account.new(account_params)
    if @account.save
      render :show
    else
      render json: @account.errors.full_messages, status: 422
    end
  end

  def destroy
    @account = Account.find_by(id: params[:id])
    if @account
      @account.destroy
      render :show
    else
      render json: ['Account not found'], status: 404
    end
  end

  private
  def account_params
    params.require(:account).permit(:acc_id, :balance, :credit, :picture, :name_first, :name_last, :employer, :email, :phone, :address, :comments, :created, :tags)
  end
end
