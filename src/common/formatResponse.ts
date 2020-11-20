interface responseFormat {
  success: boolean;
  payload: any;
}

interface errorResponse {
  success: boolean;
  error: string;
}

export function successResponse(data: any) {
  const response: responseFormat = {
    success: true,
    payload: data,
  };
  return response;
}

export function errorResponse(error: string) {
  const response: errorResponse = {
    success: false,
    error: error,
  };
  return response;
}
