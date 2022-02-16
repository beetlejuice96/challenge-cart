import axios, { AxiosResponse } from "axios";
import axiosHelper, { axiosError, axiosResponse } from "../utils/axiosHelper";

import { APIClient } from "./common.service";
import { Product } from "../types/products.response";
import { SearchRequest } from "../types/products.request";

class ProductService {
  async getProductsMatch(
    request: SearchRequest
  ): Promise<axiosResponse<Product[]> | axiosError> {
    const url = `/products/`;
    let response: AxiosResponse;
    let result;
    try {
      response = await APIClient.get(url, {
        params: { search: request.query },
      });
      result = axiosHelper.handleResponse(response);
    } catch (error: any) {
      result = axiosHelper.handleError(error);
    }
    return result;
  }
}

export default new ProductService();
