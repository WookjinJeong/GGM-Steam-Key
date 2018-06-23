/**
 * @enum EResult
 */
module.exports = {
    "Invalid": 0,
    "OK": 1,
    "Fail": 2,
    "NoConnection": 3,
    "InvalidPassword": 5,
    "LoggedInElsewhere": 6,
    "InvalidProtocolVer": 7,
    "InvalidParam": 8,
    "FileNotFound": 9,
    "Busy": 10,
    "InvalidState": 11,
    "InvalidName": 12,
    "InvalidEmail": 13,
    "DuplicateName": 14,
    "AccessDenied": 15,
    "Timeout": 16,
    "Banned": 17,
    "AccountNotFound": 18,
    "InvalidSteamID": 19,
    "ServiceUnavailable": 20,
    "NotLoggedOn": 21,
    "Pending": 22,
    "EncryptionFailure": 23,
    "InsufficientPrivilege": 24,
    "LimitExceeded": 25,
    "Revoked": 26,
    "Expired": 27,
    "AlreadyRedeemed": 28,
    "DuplicateRequest": 29,
    "AlreadyOwned": 30,
    "IPNotFound": 31,
    "PersistFailed": 32,
    "LockingFailed": 33,
    "LogonSessionReplaced": 34,
    "ConnectFailed": 35,
    "HandshakeFailed": 36,
    "IOFailure": 37,
    "RemoteDisconnect": 38,
    "ShoppingCartNotFound": 39,
    "Blocked": 40,
    "Ignored": 41,
    "NoMatch": 42,
    "AccountDisabled": 43,
    "ServiceReadOnly": 44,
    "AccountNotFeatured": 45,
    "AdministratorOK": 46,
    "ContentVersion": 47,
    "TryAnotherCM": 48,
    "PasswordRequiredToKickSession": 49,
    "AlreadyLoggedInElsewhere": 50,
    "Suspended": 51,
    "Cancelled": 52,
    "DataCorruption": 53,
    "DiskFull": 54,
    "RemoteCallFailed": 55,
    "PasswordNotSet": 56, // removed "renamed to PasswordUnset"
    "PasswordUnset": 56,
    "ExternalAccountUnlinked": 57,
    "PSNTicketInvalid": 58,
    "ExternalAccountAlreadyLinked": 59,
    "RemoteFileConflict": 60,
    "IllegalPassword": 61,
    "SameAsPreviousValue": 62,
    "AccountLogonDenied": 63,
    "CannotUseOldPassword": 64,
    "InvalidLoginAuthCode": 65,
    "AccountLogonDeniedNoMailSent": 66, // removed "renamed to AccountLogonDeniedNoMail"
    "AccountLogonDeniedNoMail": 66,
    "HardwareNotCapableOfIPT": 67,
    "IPTInitError": 68,
    "ParentalControlRestricted": 69,
    "FacebookQueryError": 70,
    "ExpiredLoginAuthCode": 71,
    "IPLoginRestrictionFailed": 72,
    "AccountLocked": 73, // removed "renamed to AccountLockedDown"
    "AccountLockedDown": 73,
    "AccountLogonDeniedVerifiedEmailRequired": 74,
    "NoMatchingURL": 75,
    "BadResponse": 76,
    "RequirePasswordReEntry": 77,
    "ValueOutOfRange": 78,
    "UnexpectedError": 79,
    "Disabled": 80,
    "InvalidCEGSubmission": 81,
    "RestrictedDevice": 82,
    "RegionLocked": 83,
    "RateLimitExceeded": 84,
    "AccountLogonDeniedNeedTwoFactorCode": 85, // removed "renamed to AccountLoginDeniedNeedTwoFactor"
    "AccountLoginDeniedNeedTwoFactor": 85,
    "ItemOrEntryHasBeenDeleted": 86, // removed "renamed to ItemDeleted"
    "ItemDeleted": 86,
    "AccountLoginDeniedThrottle": 87,
    "TwoFactorCodeMismatch": 88,
    "TwoFactorActivationCodeMismatch": 89,
    "AccountAssociatedToMultiplePlayers": 90, // removed "renamed to AccountAssociatedToMultiplePartners"
    "AccountAssociatedToMultiplePartners": 90,
    "NotModified": 91,
    "NoMobileDeviceAvailable": 92, // removed "renamed to NoMobileDevice"
    "NoMobileDevice": 92,
    "TimeIsOutOfSync": 93, // removed "renamed to TimeNotSynced"
    "TimeNotSynced": 93,
    "SMSCodeFailed": 94,
    "TooManyAccountsAccessThisResource": 95, // removed "renamed to AccountLimitExceeded"
    "AccountLimitExceeded": 95,
    "AccountActivityLimitExceeded": 96,
    "PhoneActivityLimitExceeded": 97,
    "RefundToWallet": 98,
    "EmailSendFailure": 99,
    "NotSettled": 100,
    "NeedCaptcha": 101,
    "GSLTDenied": 102,
    "GSOwnerDenied": 103,
    "InvalidItemType": 104,
    "IPBanned": 105,
    "GSLTExpired": 106,
    "InsufficientFunds": 107,
    "TooManyPending": 108,
    "NoSiteLicensesFound": 109,
    "WGNetworkSendExceeded": 110,

    // Value-to-name mapping for convenience
    "0": "Invalid",
    "1": "OK",
    "2": "Fail",
    "3": "NoConnection",
    "5": "InvalidPassword",
    "6": "LoggedInElsewhere",
    "7": "InvalidProtocolVer",
    "8": "InvalidParam",
    "9": "FileNotFound",
    "10": "Busy",
    "11": "InvalidState",
    "12": "InvalidName",
    "13": "InvalidEmail",
    "14": "DuplicateName",
    "15": "AccessDenied",
    "16": "Timeout",
    "17": "Banned",
    "18": "AccountNotFound",
    "19": "InvalidSteamID",
    "20": "ServiceUnavailable",
    "21": "NotLoggedOn",
    "22": "Pending",
    "23": "EncryptionFailure",
    "24": "InsufficientPrivilege",
    "25": "LimitExceeded",
    "26": "Revoked",
    "27": "Expired",
    "28": "AlreadyRedeemed",
    "29": "DuplicateRequest",
    "30": "AlreadyOwned",
    "31": "IPNotFound",
    "32": "PersistFailed",
    "33": "LockingFailed",
    "34": "LogonSessionReplaced",
    "35": "ConnectFailed",
    "36": "HandshakeFailed",
    "37": "IOFailure",
    "38": "RemoteDisconnect",
    "39": "ShoppingCartNotFound",
    "40": "Blocked",
    "41": "Ignored",
    "42": "NoMatch",
    "43": "AccountDisabled",
    "44": "ServiceReadOnly",
    "45": "AccountNotFeatured",
    "46": "AdministratorOK",
    "47": "ContentVersion",
    "48": "TryAnotherCM",
    "49": "PasswordRequiredToKickSession",
    "50": "AlreadyLoggedInElsewhere",
    "51": "Suspended",
    "52": "Cancelled",
    "53": "DataCorruption",
    "54": "DiskFull",
    "55": "RemoteCallFailed",
    "56": "PasswordUnset",
    "57": "ExternalAccountUnlinked",
    "58": "PSNTicketInvalid",
    "59": "ExternalAccountAlreadyLinked",
    "60": "RemoteFileConflict",
    "61": "IllegalPassword",
    "62": "SameAsPreviousValue",
    "63": "AccountLogonDenied",
    "64": "CannotUseOldPassword",
    "65": "InvalidLoginAuthCode",
    "66": "AccountLogonDeniedNoMail",
    "67": "HardwareNotCapableOfIPT",
    "68": "IPTInitError",
    "69": "ParentalControlRestricted",
    "70": "FacebookQueryError",
    "71": "ExpiredLoginAuthCode",
    "72": "IPLoginRestrictionFailed",
    "73": "AccountLockedDown",
    "74": "AccountLogonDeniedVerifiedEmailRequired",
    "75": "NoMatchingURL",
    "76": "BadResponse",
    "77": "RequirePasswordReEntry",
    "78": "ValueOutOfRange",
    "79": "UnexpectedError",
    "80": "Disabled",
    "81": "InvalidCEGSubmission",
    "82": "RestrictedDevice",
    "83": "RegionLocked",
    "84": "RateLimitExceeded",
    "85": "AccountLoginDeniedNeedTwoFactor",
    "86": "ItemDeleted",
    "87": "AccountLoginDeniedThrottle",
    "88": "TwoFactorCodeMismatch",
    "89": "TwoFactorActivationCodeMismatch",
    "90": "AccountAssociatedToMultiplePartners",
    "91": "NotModified",
    "92": "NoMobileDevice",
    "93": "TimeNotSynced",
    "94": "SMSCodeFailed",
    "95": "AccountLimitExceeded",
    "96": "AccountActivityLimitExceeded",
    "97": "PhoneActivityLimitExceeded",
    "98": "RefundToWallet",
    "99": "EmailSendFailure",
    "100": "NotSettled",
    "101": "NeedCaptcha",
    "102": "GSLTDenied",
    "103": "GSOwnerDenied",
    "104": "InvalidItemType",
    "105": "IPBanned",
    "106": "GSLTExpired",
    "107": "InsufficientFunds",
    "108": "TooManyPending",
    "109": "NoSiteLicensesFound",
    "110": "WGNetworkSendExceeded",
};
