class Api::AccountTagController < ApplicationController
  def index
    @account_tags = AccountTag.all
    render :index
  end

  def create
    @account_tag = AccountTag.new(account_tag_params)
    if @account_tag.save
      render :show
    else
      render json: @account_tag.errors.full_messages, status: 422
    end
  end

  def destroy
    @account_tag = AccountTag.find_by(id: params[:id])
    if @account_tag
      @account_tag.destroy
      render :show
    else
      render json: ["Not found"], status: 404
    end
  end

  private
  def account_tag_params
    params.require(:account_tag).permit(:account_id, :tag_id)
  end
end
